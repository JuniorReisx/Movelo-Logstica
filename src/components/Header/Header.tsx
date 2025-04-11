import { Truck, Package, Menu, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Truck className="h-8 w-8 text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">Movelo</h1>
              <p className="text-blue-200 text-xs">Soluções em Logística</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-blue-100 hover:text-white font-medium transition duration-150"
            >
              Início
            </a>
            <a
              href="#"
              className="text-blue-100 hover:text-white font-medium transition duration-150"
            >
              Serviços
            </a>
            <a
              href="#"
              className="text-blue-100 hover:text-white font-medium transition duration-150"
            >
              Rastreamento
            </a>
            <a
              href="#"
              className="text-blue-100 hover:text-white font-medium transition duration-150"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-blue-100 hover:text-white font-medium transition duration-150"
            >
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-blue-100 hover:bg-blue-700 hover:text-white transition duration-150">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-blue-100 hover:bg-blue-700 hover:text-white transition duration-150">
              <Package className="h-5 w-5" />
            </button>
            <button className="hidden md:flex items-center space-x-2 bg-white text-blue-800 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition duration-150">
              <User className="h-4 w-4" />
              <span>Área do Cliente</span>
            </button>
            <button className="md:hidden p-2 rounded-full text-blue-100 hover:bg-blue-700 hover:text-white transition duration-150">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-blue-200">
            <p>Rastreie sua entrega em tempo real</p>
            <p className="hidden md:block">
              Central de Atendimento: (71) 99913-6601
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
