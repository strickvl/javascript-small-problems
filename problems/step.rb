def step(initial, final, increment)
  iterator = initial
  while iterator <= final
    yield(iterator)
    iterator += increment
  end
  nil
end

step(1, 10, 3) { |value| puts "value = #{value}" }
