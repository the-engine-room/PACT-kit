#
# Save this in _rake/lessc.rake
#

require 'less'

LESS = File.join(SOURCE, "assets", "themes", "bootstrap-3") # set theme here
CONFIG['less'] = File.join(LESS, "less")
CONFIG['css'] = File.join(LESS, "css")
CONFIG['input'] = "style.less"
CONFIG['output'] = "style.css"

desc "Compile Less"
task :lessc do
  less   = CONFIG['less']

  input  = File.join( less, CONFIG['input'] )
  output = File.join( CONFIG['css'], CONFIG['output'] )

  source = File.open( input, "r" ).read
  parser = Less::Parser.new( :paths => [less] )
  tree = parser.parse( source )

  File.open( output, "w+" ) do |f|
    f.puts tree.to_css( :compress => true )
  end
end # task :lessc
