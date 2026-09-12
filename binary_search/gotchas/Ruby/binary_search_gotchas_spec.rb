require 'rspec'
require_relative 'binary_search_gotchas'

describe 'binary search gotchas' do
  describe 'gotcha 1: `<` vs `<=` in the loop condition' do
    it 'buggy version misses the single-element case' do
      expect(search_buggy_off_by_one([5], 5)).to eq(-1)
    end

    it 'fixed version finds it' do
      expect(search_fixed_bound_mismatch([5], 5)).to eq(0)
    end
  end

  describe 'gotcha 2: a branch that never shrinks the range' do
    it 'buggy version spins instead of converging' do
      expect(search_buggy_infinite([1, 2, 3, 4], 4)).to eq(:infinite_loop_detected)
    end

    it 'fixed version converges' do
      expect(search_fixed_infinite([1, 2, 3, 4], 4)).to eq(3)
    end
  end

  describe 'gotcha 3: nil from an out-of-range index' do
    it 'raises once the search walks off the end of the array' do
      expect { search_buggy_out_of_range([2, 4, 6, 8], 100) }
        .to raise_error(RuntimeError, /is nil/)
    end
  end

  describe 'gotcha 4: the array has to be sorted' do
    it 'returns a wrong answer on unsorted input' do
      unsorted = [8, 1, 6, 3, 9, 2]
      expect(search_fixed_bound_mismatch(unsorted, 3)).not_to eq(unsorted.index(3))
    end
  end

  describe 'gotcha 5: duplicates need bisect_left / bisect_right' do
    let(:nums) { [1, 3, 3, 3, 3, 5, 8] }

    it 'a plain search only guarantees *a* match, not a specific one' do
      expect((1..4)).to cover(search_fixed_bound_mismatch(nums, 3))
    end

    it 'bisect_left finds the first occurrence' do
      expect(bisect_left(nums, 3)).to eq(1)
    end

    it 'bisect_right finds the index just past the last occurrence' do
      expect(bisect_right(nums, 3)).to eq(5)
    end

    it 'the gap between them is the count of occurrences' do
      expect(bisect_right(nums, 3) - bisect_left(nums, 3)).to eq(4)
    end
  end

  describe 'gotcha 6: exact float equality never terminates' do
    it 'buggy version never converges for an irrational root' do
      expect(sqrt_buggy_equality(2)).to eq(:never_converged)
    end

    it 'fixed version converges within the precision threshold' do
      expect(sqrt_fixed_precision(2)).to be_within(1e-6).of(Math.sqrt(2))
    end
  end

  describe 'gotcha 7: Ruby does not overflow on large integers' do
    it 'handles values well beyond a 64-bit signed range without wrapping' do
      huge = 2**62
      expect((huge + huge) / 2).to eq(huge)
    end
  end
end
