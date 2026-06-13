interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let colorStyles = "bg-gray-100 text-gray-800 border-gray-200";

  if (status === 'Enviado') colorStyles = "bg-blue-600 text-white border-blue-700";
  if (status === 'Prueba Técnica') colorStyles = "bg-yellow-500 text-white border-yellow-600";
  if (status === 'Entrevista') colorStyles = "bg-purple-600 text-white border-purple-700";
  if (status === 'Oferta') colorStyles = "bg-green-600 text-white border-green-700";
  if (status === 'Rechazado') colorStyles = "bg-red-600 text-white border-red-700";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colorStyles}`}>
      {status}
    </span>
  );
}