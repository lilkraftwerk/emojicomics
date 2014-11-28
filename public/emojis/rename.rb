filenames = Dir.glob("*")

id = 1;

filenames.each do |filename|
    puts filename
    File.rename(filename, "#{id}.png")
    id += 1
end