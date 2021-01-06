# def compute
#   return yield if block_given?
#   "Does not compute."
# end
# 
# puts compute { 5 + 3 } == 8
# puts compute { 'a' + 'b' } == 'ab'
# puts compute == 'Does not compute.'

def compute(input)
  return yield(input) if block_given?
  "No block passed in"
end

puts compute(0)
puts compute(3) {|n| n*5}
puts compute("Christmas") {|phrase| "Happy " + phrase}
