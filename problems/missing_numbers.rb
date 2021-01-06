def missing(arr)
  low_val = arr.sort.first
  high_val = arr. sort.last
  full_array = (low_val..high_val).to_a
  full_array-arr
end

puts missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
puts missing([1, 2, 3, 4]) == []
puts missing([1, 5]) == [2, 3, 4]
puts missing([6]) == []
