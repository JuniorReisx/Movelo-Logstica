export interface Recipient {
  name: string;
  state: string;
  city: string;
  address: string;
}

export interface TrackingInfo {
  updatedAt: string;
  currentLocation: string;
  deliveryEstimate: string;
}

export interface Order {
  orderId: string;
  orderDate: string;
  item: string;
  quantity: number;
  status: string;
  recipient: Recipient;
  tracking: TrackingInfo;
}
