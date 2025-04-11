import { Package, Info, Truck, Check, Clock } from "lucide-react";
import { Order } from "../../types/index";
import { useState } from "react";
import { useGetRequests } from "../../hook/useGetRequests";

export function Table() {
  const [orders, setOrders] = useState<Order[]>(useGetRequests());
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const toggleRowExpand = (orderId: string) => {
    if (expandedRow === orderId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(orderId);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "in transit":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <Check className="h-4 w-4" />;
      case "in transit":
        return <Truck className="h-4 w-4" />;
      case "processing":
        return <Clock className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-blue-700 px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Package className="h-5 w-5 mr-2" />
          Pedidos
        </h2>
        <div className="text-sm text-blue-100">
          Total: {orders.length} pedidos
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-50 text-blue-800 text-left">
              <th className="py-3 px-4 font-semibold">ID do Pedido</th>
              <th className="py-3 px-4 font-semibold">Data</th>
              <th className="py-3 px-4 font-semibold">Item</th>
              <th className="py-3 px-4 font-semibold">Destinatário</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold text-right">Detalhes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <>
                <tr
                  key={order.orderId}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium">{order.orderId}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {new Date(order.orderDate).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="py-3 px-4">{order.item}</td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium">{order.recipient.name}</div>
                      <div className="text-sm text-gray-600">
                        {order.recipient.city}/{order.recipient.state}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      <span className="mr-1">
                        {getStatusIcon(order.status)}
                      </span>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => toggleRowExpand(order.orderId)}
                      className="inline-flex items-center justify-center p-2 rounded-full text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Info className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
                {expandedRow === order.orderId && (
                  <tr className="bg-blue-50">
                    <td colSpan={6} className="py-4 px-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-2">
                            Informações do Pedido
                          </h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">Produto:</span>{" "}
                              {order.item}
                            </p>
                            <p>
                              <span className="font-medium">Quantidade:</span>{" "}
                              {order.quantity}
                            </p>
                            <p>
                              <span className="font-medium">ID do Pedido:</span>{" "}
                              {order.orderId}
                            </p>
                            <p>
                              <span className="font-medium">
                                Data do Pedido:
                              </span>{" "}
                              {new Date(order.orderDate).toLocaleDateString(
                                "pt-BR"
                              )}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-blue-800 mb-2">
                            Informações de Rastreamento
                          </h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">
                                Última Atualização:
                              </span>{" "}
                              {order.tracking.updatedAt}
                            </p>
                            <p>
                              <span className="font-medium">
                                Localização Atual:
                              </span>{" "}
                              {order.tracking.currentLocation}
                            </p>
                            <p>
                              <span className="font-medium">
                                Previsão de Entrega:
                              </span>{" "}
                              {new Date(
                                order.tracking.deliveryEstimate
                              ).toLocaleDateString("pt-BR")}
                            </p>
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <h4 className="font-semibold text-blue-800 mb-2">
                            Endereço de Entrega
                          </h4>
                          <div className="text-sm">
                            <p>{order.recipient.name}</p>
                            <p>{order.recipient.address}</p>
                            <p>
                              {order.recipient.city}/{order.recipient.state}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {orders.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <Package className="h-12 w-12 text-blue-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">
            Nenhum pedido encontrado
          </h3>
          <p className="mt-1 text-gray-500">
            Não há pedidos registrados no sistema.
          </p>
        </div>
      )}
    </div>
  );
}
