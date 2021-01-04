class PolyTreeNode
    attr_reader :parent
    attr_accessor :value
    attr_reader :children

    def initialize(value = nil)
        @value = value
        @parent = nil
        @children = []
    end
end