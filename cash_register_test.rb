require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

#require 'simplecov'
#SimpleCov.start

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @register = CashRegister.new(1000)
  end

  def test_accept_money
    transaction = Transaction.new(500)
    transaction.amount_paid = 500

    before = @register.total_money
    @register.accept_money(transaction)
    after = @register.total_money

    assert_equal(1500, after)
    assert_equal(before, after-500)
  end

  def test_change
    transaction = Transaction.new(250)
    transaction.amount_paid = 300

    change = @register.change(transaction)
    assert_equal(50, change)
  end

  def test_give_receipt
    transaction = Transaction.new(500)
    transaction.amount_paid = 500

    assert_output("You've paid $500.\n") do
      @register.give_receipt(transaction)
    end
  end

  def test_prompt_for_payment_transaction
    transaction = Transaction.new(30)
    input = StringIO.new('30')
    output = StringIO.new
    transaction.prompt_for_payment(input: input, output: output)
    assert_equal 30, transaction.amount_paid
  end
end

