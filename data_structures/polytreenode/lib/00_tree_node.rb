class PolyTreeNode
    attr_reader :parent
    attr_accessor :value
    attr_accessor :children

    def initialize(value = nil)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent = nil)

        if new_parent.nil?
            @parent = nil
        else
            return if new_parent.children.include?(self)
            @parent.children.delete(self) unless @parent.nil?
            @parent = new_parent
            new_parent.children.push(self)
        end
    end
end