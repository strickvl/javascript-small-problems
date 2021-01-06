class Lamp
  attr_accessor :color, :on
  
  def initialize(color)
    @color = color
    @on = false
  end
  
  def toggle_switch
    case self.on
    when true then self.on = false
    when false then self.on = true
    end
  end
  
  def state
    case on
    when true then return "The lamp is on."
    when false then return "The lamp is off."
    end
  end
end

lamp = Lamp.new("blue")
puts lamp != nil
puts lamp.color == "blue"
puts lamp.on == false
puts lamp.state == "The lamp is off."
lamp.toggle_switch
puts lamp.on
