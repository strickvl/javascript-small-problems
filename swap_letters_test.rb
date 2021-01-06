require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

require_relative 'swap_letters'

SAMPLE_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed vulputate ipsum.
Suspendisse commodo sem arcu. Donec a nisi elit. Nullam eget nisi commodo, volutpat
quam a, viverra mauris. Nunc viverra sed massa a condimentum. Suspendisse ornare justo
nulla, sit amet mollis eros sollicitudin et. Etiam maximus molestie eros, sit amet dictum
dolor ornare bibendum. Morbi ut massa nec lorem tincidunt elementum vitae id magna. Cras
et varius mauris, at pharetra mi."

class SwapLettersTest < Minitest::Test
  def setup
    @sample = Text.new(SAMPLE_TEXT)
  end

  def teardown
    puts "This test is over now."
  end

  def test_swap
    new_text = @sample.swap("N", "Z")
    refute_equal(new_text, @sample)
  end

  def test_word_count
    count = @sample.word_count
    assert_equal(72, count)
  end
end
