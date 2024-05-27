import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import React from 'react'

export default function page() {
    return (
        <div className="bg-gray-100 flex">
            <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
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
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50 dark:hover:bg-gray-800"
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
                                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-50 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
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
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Definición de Tipos de Datos</h2>
                                    <div className="rounded-lg p-4 text-sm font-medium text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-800">
                                        <p>
                                            Los tipos de datos son una clasificación que se le da a las distintas variables que se utilizan en la programación, determinando qué tipo de valores pueden almacenar y qué operaciones se pueden realizar con ellos.
                                        </p>
                                        <h3 className="text-lg font-semibold mt-4">Fundamentos de los Tipos de Datos</h3>
                                        <ul className="list-disc list-inside">
                                            <li><strong>Enteros:</strong> Números sin parte decimal. Ejemplos: 1, 42, -5.</li>
                                            <li><strong>Flotantes:</strong> Números con parte decimal. Ejemplos: 3.14, -0.001, 2.0.</li>
                                            <li><strong>Cadenas de texto:</strong> Secuencias de caracteres. Ejemplos: "Hola", "1234", "true".</li>
                                            <li><strong>Booleanos:</strong> Valores lógicos que pueden ser `true` o `false`.</li>
                                            <li><strong>Arrays:</strong> Colecciones de elementos del mismo tipo almacenados en posiciones contiguas.</li>
                                            <li><strong>Objetos:</strong> Estructuras que representan entidades con propiedades y métodos.</li>
                                        </ul>
                                        <h3 className="text-lg font-semibold mt-4">Ejemplos de Tipos de Datos</h3>
                                        <div className="rounded-lg p-4 text-sm font-medium text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-800">
                                            <p>
                                                A continuación, se muestran algunos ejemplos de tipos de datos en diferentes lenguajes de programación:
                                            </p>
                                            <h3 className="text-lg font-semibold mt-4">JavaScript</h3>
                                            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                <code className="block whitespace-pre-wrap">
                                                    {`// Entero
let entero = 42;

// Flotante
let flotante = 3.14;

// Cadena de texto
let cadena = "Hola, Mundo";

// Booleano
let booleano = true;

// Array
let array = [1, 2, 3, 4, 5];

// Objeto
let objeto = {
  nombre: "Juan",
  edad: 30
};`}
                                                </code>
                                            </div>
                                            <h3 className="text-lg font-semibold mt-4">Python</h3>
                                            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                <code className="block whitespace-pre-wrap">
                                                    {`# Entero
entero = 42

# Flotante
flotante = 3.14

# Cadena de texto
cadena = "Hola, Mundo"

# Booleano
booleano = True

# Lista (equivalente a array)
lista = [1, 2, 3, 4, 5]

# Diccionario (equivalente a objeto)
diccionario = {
    "nombre": "Juan",
    "edad": 30
}`}
                                                </code>
                                            </div>
                                            <h3 className="text-lg font-semibold mt-4">Java</h3>
                                            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                <code className="block whitespace-pre-wrap">
                                                    {`// Entero
int entero = 42;

// Flotante
float flotante = 3.14f;

// Cadena de texto
String cadena = "Hola, Mundo";

// Booleano
boolean booleano = true;

// Array
int[] array = {1, 2, 3, 4, 5};

// Objeto
class Persona {
    String nombre;
    int edad;

    Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

Persona persona = new Persona("Juan", 30);`}
                                                </code>
                                            </div>
                                            <h3 className="text-lg font-semibold mt-4">Características adicionales</h3>
                                            <ul className="list-disc list-inside">
                                                <li><strong>Conversión de tipos:</strong> Convertir un valor de un tipo de dato a otro, por ejemplo, de cadena a entero.</li>
                                                <li><strong>Tipo de dato dinámico:</strong> Algunos lenguajes permiten cambiar el tipo de una variable durante la ejecución.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>



                                <div className="grid gap-4">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Ejemplo 6: "tipos de datos" en JavaScript </h2>
                                    <div
                                        className="rounded-lg border border-gray-200 bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-800 dark:border-gray-800">
                                        <pre className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                            <code>
                                            {`// Entero
let entero = 42;

// Flotante
let flotante = 3.14;

// Cadena de texto
let cadena = "Hola, Mundo";

// Booleano
let booleano = true;

// Array
let array = [1, 2, 3, 4, 5];

// Objeto
let objeto = {
  nombre: "Juan",
  edad: 30
};`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
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
