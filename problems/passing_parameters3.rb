items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

gather(items) do |var1, var2, var3, var4|
  puts [var1, var2, var3].join(", ")
  puts var4
end

gather(items) do |var1, var2, var3, var4|
  puts var1
  puts [var2, var3].join(", ")
  puts var4
end

gather(items) do |var1, *var2|
  puts var1
  puts var2.join(", ")
end

gather(items) do |*var|
  puts var.join(", ")
end
