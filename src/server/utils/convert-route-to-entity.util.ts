const mapping: Record<string, string> = {
  bookings: 'booking',
  organizations: 'organization',
  purohits: 'purohit',
  rituals: 'ritual',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
