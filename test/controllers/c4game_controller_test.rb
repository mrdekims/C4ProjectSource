require 'test_helper'

class C4gameControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get start" do
    get :start
    assert_response :success
  end

  test "should get reset" do
    get :reset
    assert_response :success
  end

  test "should get end" do
    get :end
    assert_response :success
  end

end
