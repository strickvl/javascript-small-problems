def drop_while(arr)
  final = []
  arr.each_with_index do |item, idx|
    if yield(item) != true && idx == (arr.size-1)
      return [arr[-1]]
    elsif yield(item) != true && idx < (arr.size-1)
      return arr[idx..-1]
    end
  end
  final
end

puts drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
puts drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
puts drop_while([1, 3, 5, 6]) { |value| true } == []
puts drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
puts drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
puts drop_while([]) { |value| true } == []

=begin
input: array
output: array

rules:

if the array is empty, return an empty array

IF NOT:
iterate through the array
1) if it finds an element for which yield(element) evaluates to false, THEN
- if on the last value, return the whole array
- if on any value prior to that, return the remaining values in the array

2) if everything evaluates to true, return an empty array


=end
