class C4gameController < ApplicationController
  layout "layout_c4game"
  def index

  end

  def start
    player1 = Player.new(params[:player1_nickname],"images/avatar/1461738121_Purple_Monsters_11-01.png")
    player2 = Player.new(params[:player2_nickname],"images/avatar/1461738093_Frankenstein.png")
    @c4gamepanel = C4gamepanel.new(player1,player2)
    render :layout=>"layout_game"
  end

  def reset
  end

  def end
  end
end
