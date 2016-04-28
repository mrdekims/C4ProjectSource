class C4gamepanel
  attr_accessor :player1, :player2, :slots, :rows, :cols 
  def initialize (player1, player2)
    rows=6
    cols=7
    @player1 = player1
    @player2 = player2
    @rows = rows
    @cols = cols
    @slots = []
    for x in 0...rows do
      for y in 0...cols do
        slots << C4slot.new(x, y)
      end 
    end
  end
end