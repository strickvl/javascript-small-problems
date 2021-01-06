def zip(arr1, arr2)
  final = []
  arr1.size.times do |counter|
    final << [arr1[counter], arr2[counter]]
  end
  final
end

p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]
