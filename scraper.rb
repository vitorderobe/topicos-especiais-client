# encoding: utf-8

require "mechanize"
require "json"

class Scraper

  API = "http://localhost:3000/api/v1/games"
  URL = "http://globoesporte.globo.com/placar-ge/hoje/"
  # URL = "http://esporte.band.uol.com.br/futebol/placar"
  # URL = "http://esporte.uol.com.br/futebol/central-de-jogos/jogos-do-dia/"
  # URL = "http://www.superplacar.com.br"

  def search
    agent = Mechanize.new
    agent.get URL

    matches = agent.page.parser.css('.card-jogo')

    games_array = []

    matches.each do |match|
      games_array << {
        home:         match.css(".mandante .nome-completo").text.strip,
        away:         match.css(".visitante .nome-completo").text.strip,
        home_score:   match.css(".placar-mandante").text.strip,
        away_score:   match.css(".placar-visitante").text.strip,
        championship: match.css("header .titulo span").text.strip,
        place:        " Casa do #{match.css(".mandante .nome-completo").text.strip}",
        date:         Time.now.strftime("%d/%m/%y"),
        time:         match.css("header .titulo time").text.strip
      }
    end

    games_array.each do |game|
      agent.post(API, game)
    end
  end

end

Scraper.new.search()