class AssemblyLine
  PRODUCTION_PER_HOUR = 221

  def initialize(speed)
    @speed = speed
  end

  def production_rate_per_hour
    case @speed
      when 1..4
        success = 1
      when 5..8
        success = 0.9
      when 9
        success = 0.8
      when 10
        success = 0.77
    end

    PRODUCTION_PER_HOUR * success * @speed
  end

  def working_items_per_minute
    (production_rate_per_hour()/60).floor
  end
end
