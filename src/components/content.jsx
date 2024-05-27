import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export function Content() {
  return (
    (<div
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Ejemplos de Código</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-50 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/">
                <HomeIcon className="h-4 w-4" />
                Inicio
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-800"
                href="/useIf">
                <CodeIcon className="h-4 w-4" />
                Uso del If
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-800"
                href="/Arreglos">
                <BookIcon className="h-4 w-4" />
                Arrays
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-800"
                href="/for">
                <UsersIcon className="h-4 w-4" />
                for
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-800"
                href="/functions">
                <SettingsIcon className="h-4 w-4" />
                Creacion y uso de funciones
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-800"
                href="/dataTypes">
                <SettingsIcon className="h-4 w-4" />
                Tipos de datos
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header
          className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Inicio</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Ejemplos de Código</h1>
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <SearchIcon
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                  placeholder="Buscar ejemplos..."
                  type="search" />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32" />
                  <span className="sr-only">Menú de usuario</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuItem>Soporte</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-gray-950">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50">
                    Bienvenido a nuestra Documentacion de Algoritmia
                  </h1>
                  <p
                    className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explora nuestros ejemplos de código y ejecútalos directamente en la página.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-950">
            <div className="container grid gap-8 px-4 md:px-6">
              <div className="grid gap-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Definición de Algoritmia</h2>
                <div className="rounded-lg p-4 text-sm font-medium text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-800">
                  <p>
                    La algoritmia es el estudio y diseño de algoritmos, que son secuencias finitas y bien definidas de pasos o instrucciones que se utilizan para resolver problemas o realizar tareas específicas. La algoritmia se centra en la creación de métodos eficientes y efectivos para procesar datos y realizar cálculos.
                  </p>
                  <h3 className="text-lg font-semibold mt-4">Fundamentos de la Algoritmia</h3>
                  <ul className="list-disc list-inside">
                    <li><strong>Correctitud:</strong> Un algoritmo debe producir el resultado correcto para todas las entradas válidas.</li>
                    <li><strong>Eficiencia:</strong> Se refiere al uso óptimo de recursos como el tiempo de ejecución (velocidad) y el espacio de almacenamiento (memoria).</li>
                    <li><strong>Claridad:</strong> Un algoritmo debe ser claro y comprensible para facilitar su implementación y mantenimiento.</li>
                    <li><strong>Terminación:</strong> Un algoritmo debe terminar después de un número finito de pasos.</li>
                    <li><strong>Generalidad:</strong> Un buen algoritmo debe ser aplicable a una amplia gama de problemas dentro de su dominio.</li>
                  </ul>
                  <h3 className="text-lg font-semibold mt-4">Tipos de Algoritmos y Ejemplos</h3>
                  <div className="rounded-lg p-4 text-sm font-medium text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-800">
                    <p>
                      La algoritmia es el estudio y diseño de algoritmos, que son secuencias finitas y bien definidas de pasos o instrucciones que se utilizan para resolver problemas o realizar tareas específicas. La algoritmia se centra en la creación de métodos eficientes y efectivos para procesar datos y realizar cálculos.
                    </p>
                    <h3 className="text-lg font-semibold mt-4">Fundamentos de la Algoritmia</h3>
                    <ul className="list-disc list-inside">
                      <li><strong>Correctitud:</strong> Un algoritmo debe producir el resultado correcto para todas las entradas válidas.</li>
                      <li><strong>Eficiencia:</strong> Se refiere al uso óptimo de recursos como el tiempo de ejecución (velocidad) y el espacio de almacenamiento (memoria).</li>
                      <li><strong>Claridad:</strong> Un algoritmo debe ser claro y comprensible para facilitar su implementación y mantenimiento.</li>
                      <li><strong>Terminación:</strong> Un algoritmo debe terminar después de un número finito de pasos.</li>
                      <li><strong>Generalidad:</strong> Un buen algoritmo debe ser aplicable a una amplia gama de problemas dentro de su dominio.</li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-4">Tipos de Algoritmos y Ejemplos</h3>
                    <ul className="list-disc list-inside">
                      <li><strong>Algoritmos de Ordenación:</strong>
                        <ul className="list-disc list-inside">
                          <li>Bubble Sort: Ordena una lista comparando elementos adyacentes y permutándolos si están en el orden incorrecto.</li>
                          <li>Quick Sort: Utiliza el enfoque de divide y vencerás, seleccionando un pivote y particionando la lista en sublistas menores y mayores.</li>
                        </ul>
                      </li>
                      <li><strong>Algoritmos de Búsqueda:</strong>
                        <ul className="list-disc list-inside">
                          <li>Búsqueda Lineal: Recorre una lista desde el inicio hasta el final para encontrar un elemento.</li>
                          <li>Búsqueda Binaria: Busca un elemento en una lista ordenada dividiéndola repetidamente a la mitad.</li>
                        </ul>
                      </li>
                      <li><strong>Algoritmos de Dividir y Vencerás:</strong>
                        <ul className="list-disc list-inside">
                          <li>Merge Sort: Divide la lista en mitades, ordena cada mitad y luego las combina.</li>
                          <li>Algoritmo de Karatsuba: Multiplica números grandes dividiéndolos en partes más pequeñas.</li>
                        </ul>
                      </li>
                      <li><strong>Algoritmos de Programación Dinámica:</strong>
                        <ul className="list-disc list-inside">
                          <li>Fibonacci: Calcula el n-ésimo número de Fibonacci almacenando resultados intermedios para evitar cálculos redundantes.</li>
                          <li>Algoritmo de Bellman-Ford: Encuentra los caminos más cortos en un grafo con pesos, incluso con pesos negativos.</li>
                        </ul>
                      </li>
                      <li><strong>Algoritmos de Grafos:</strong>
                        <ul className="list-disc list-inside">
                          <li>Algoritmo de Dijkstra: Encuentra el camino más corto desde un nodo inicial a todos los otros nodos en un grafo con pesos no negativos.</li>
                          <li>Algoritmo de Prim: Encuentra el árbol de expansión mínima en un grafo conexo y ponderado.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div className="grid gap-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Ejemplo 1: Como declarar una Variable en JavaScript</h2>
                <div
                  className="rounded-lg border border-gray-200 bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-800 dark:border-gray-800">
                  <pre className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    <code>
                      {`let a = 10;\nvar b = 20;\nconst c = a + b;\nconsole.log(c);`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>)
  );
}

function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function CodeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
