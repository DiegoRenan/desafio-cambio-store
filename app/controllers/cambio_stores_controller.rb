class CambioStoresController < ApplicationController
  layout "application"
  def index
  end

  def moeda
    @moeda = params[:moeda]
    response = getMoeda(@moeda)
    
    if response.code == 200
      render json: response.body, status: :ok
    else
      render json: response, status: :service_unavailable
    end
  end

  private
    def cambio_params
      params.require(:cambio_store).permit(:moeda)
    end

    def getMoeda(moeda)
      begin
        response = RestClient::Request.execute(
            :method => 'get',
            :url => "https://economia.awesomeapi.com.br/all/#{moeda}"
        )
        return response
      rescue RestClient::ExceptionWithResponse => e
        return e.response
      end
    end
end
