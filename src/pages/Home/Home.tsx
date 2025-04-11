import { Table } from "../../components/Table/Table";
import {
  Search,
  Package,
  TrendingUp,
  Map,
  Clock,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      id: 1,
      title: "Entregas Realizadas Hoje",
      value: "127",
      icon: <Package className="h-8 w-8 text-blue-600" />,
      change: "+12%",
    },
    {
      id: 2,
      title: "Taxa de Pontualidade",
      value: "98%",
      icon: <Clock className="h-8 w-8 text-green-600" />,
      change: "+2%",
    },
    {
      id: 3,
      title: "Veículos em Rota",
      value: "43",
      icon: <Map className="h-8 w-8 text-purple-600" />,
      change: "-5%",
    },
    {
      id: 4,
      title: "Volume de Cargas",
      value: "12.3t",
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      change: "+8%",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                Painel de Controle de Logística
              </h1>
              <p className="mt-2 text-lg text-blue-100">
                Monitore e gerencie todas as suas operações logísticas em um só
                lugar.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <RefreshCw className="h-4 w-4 mr-2" />
                Atualizar Dados
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Pedidos Recentes
            </h2>
            <div className="relative rounded-md shadow-sm max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                placeholder="Buscar por ID do pedido, cliente ou item..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">{stat.icon}</div>
                  <div className="ml-5 w-0 flex-1">
                    <div className="text-sm font-medium text-gray-500 truncate">
                      {stat.title}
                    </div>
                    <div className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div
                        className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Table />
        </div>

        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Ações Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <Package className="h-5 w-5 mr-2" />
              Novo Pedido
            </button>
            <button className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
              <RefreshCw className="h-5 w-5 mr-2" />
              Atualizar Rastreamentos
            </button>
            <button className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
              <Map className="h-5 w-5 mr-2" />
              Ver Mapa de Entregas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
