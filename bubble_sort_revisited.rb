def bubble_sort!(array)
  array.each_with_index do |item|
    0.upto(array.size-2) do |idx|
      first = array[idx]
      second = array[idx+1]
      if block_given?
        array[idx] = second if !yield(first, second)
        array[idx+1] = first if !yield(first, second)
      else
        array[idx] = second if first > second
        array[idx+1] = first if first > second
      end
    end
  end
  array
end

array = [5, 3]
bubble_sort!(array)
puts array == [3, 5]

array = [5, 3, 7]
bubble_sort!(array) { |first, second| first >= second }
puts array == [7, 5, 3]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
puts array == [1, 2, 4, 6, 7]

array = [6, 12, 27, 22, 14]
bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
puts array == [14, 22, 12, 6, 27]

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array)
puts array == %w(Kim Pete Tyler alice bonnie rachel sue)

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
puts array == %w(alice bonnie Kim Pete rachel sue Tyler)
