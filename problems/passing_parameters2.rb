def test_method(array)
  yield(array)
end

birds = %w(raven finch hawk eagle)

test_method(birds) do |_, _, *raptors|
  puts "Raptors = #{raptors.join(", ")}"
end
