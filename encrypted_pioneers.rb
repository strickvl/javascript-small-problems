names = ["Nqn Ybirynpr",
         "Tenpr Ubccre",
         "Nqryr Tbyqfgvar",
         "Nyna Ghevat",
         "Puneyrf Onoontr",
         "Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv",
         "Wbua Ngnanfbss",
         "Ybvf Unvog",
         "Pynhqr Funaaba",
         "Fgrir Wbof",
         "Ovyy Tngrf",
         "Gvz Orearef-Yrr",
         "Fgrir Jbmavnx",
         "Xbaenq Mhfr",
         "Fve Nagbal Ubner",
         "Zneiva Zvafxl",
         "Lhxvuveb Zngfhzbgb",
         "Unllvz Fybavzfxv",
         "Tregehqr Oynapu"]

def convert_name(string)
  names = string.split
  decrypted_arr = []
  names.each do |name|
    decrypted_name = ""
    name.chars do |char|
      case char
      when "a".."m", "A".."M" then decrypted_name << ((char.ord+13).chr)
      when "n".."z", "N".."Z" then decrypted_name << ((char.ord-13).chr)
      else decrypted_name << char
      end
    end
    decrypted_arr << decrypted_name
  end
  decrypted_arr.join(" ")
end

p names.map {|name| convert_name(name) }

