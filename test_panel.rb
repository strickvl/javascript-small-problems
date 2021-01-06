#require 'simplecov'
#SimpleCov.start
require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

require_relative "panel"

class SomeTestsTest < MiniTest::Test
  def test_boolean_assertion
    assert(1.odd?)
    assert(3.odd?)
    assert(5.odd?)
    assert_equal(false, 0.odd?)
    assert_equal(false, 2.odd?)
    assert_equal(false, -2.odd?)
  end

  def test_downcase
    assert_equal('xyz', 'XYZ'.downcase)
  end

  def test_nil
    assert_nil(nil)
  end

  def test_empty_array
    list = []
    assert_empty(list)
  end

  def test_included_object
    list = ['xyz']
    assert_includes(list, 'xyz')
  end

  def test_exception_assertion    
    assert_raises(NoExperienceError) do
      adam = Employee.new
      adam.hire
    end
  end

  def test_type_assertion
    value = Numeric.new
    assert_instance_of(Numeric, value)
  end

  def test_kind_assertion
    value = 3
    assert_kind_of(Numeric, value)
  end

  def test_same_object
    a = 3
    c = 3
    assert_same(a, c)
  end

  def test_refutation
    list = ['abc']
    refute_includes(list, 'xyz')
  end
end
