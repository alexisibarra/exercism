class LogLineParser
  LOG_LINE_REGEX = /\[(.*)\]:\s([\w\s]*)/

  def initialize(line)
    @line = line
    @match = line.match(LOG_LINE_REGEX)
  end

  def message
    @match[2].strip
  end

  def log_level
    @match[1].downcase
  end

  def reformat
    "#{message} (#{log_level})"
  end
end

puts LogLineParser.new('[WARNING]: Decreased performance').log_level()
puts LogLineParser.new('[WARNING]: Decreased performance').message()