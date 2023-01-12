export function Loading({
  type = "border",
  color = "dark",
  width = "3rem",
  height = "3rem",
}) {
  return (
    <div className="container-fluid container-loading">
      <div className="row h-100 justify-content-center align-items-center">
        <div
          className={`spinner-${type} text-${color}`}
          style={{ width, height }}
        >
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    </div>
  );
}
