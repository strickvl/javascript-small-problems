def divisors(val)
  arr = []
  1.upto(val) do |int|
    arr << int if val.divmod(int).last == 0
  end
  arr
end

puts divisors(1) == [1]
puts divisors(7) == [1, 7]
puts divisors(12) == [1, 2, 3, 4, 6, 12]
puts divisors(98) == [1, 2, 7, 14, 49, 98]
puts divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute
