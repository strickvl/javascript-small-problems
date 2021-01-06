class Cat
  def initialize(n)
    @name=n
  end
end

kitty = Cat.new("Sophie")
puts Cat.name # --> outputs "Cat" as the class name


class Cat
  def initialize(n)
    @name=n
  end

  def name
    @name
  end
end

kitty = Cat.new("Sophie")
puts kitty.name # --> outputs "Cat" as the class name
