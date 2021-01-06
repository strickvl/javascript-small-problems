class NoExperienceError < StandardError
end

class Employee
  def initialize(experience = false)
    @experience = experience
  end
  
  def hire
    if @experience == false
      raise NoExperienceError
    end
  end
end
