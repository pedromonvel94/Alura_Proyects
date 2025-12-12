package com.aluracursos.screenmatch.modelos;

public class Principal {
    public static void main(String[] args) {
        Pelicula miPelicula = new Pelicula(); //Pelicula (Tipo de dato) miPelicula (Nombre de la instancia) = new (Le decimos a java que queremos crear una nueva instancia) Pelicula (De la clase pelicula)

        miPelicula.setNombre("Encanto");
        miPelicula.setFechaDeLanzamiento(2021);
        miPelicula.setIsIncluidoEnElPlan(true);
        miPelicula.setDuracionEnMinutos(130);

        miPelicula.muestraFichaTecnica();
        miPelicula.evalua(8);
        miPelicula.evalua(10);
        miPelicula.evalua(6);
        miPelicula.evalua(5);

        System.out.println("----------------------------------------------");
        System.out.println("La pelicula: " + miPelicula.getNombre() + ", Fue lanzada en " + miPelicula.getFechaDeLanzamiento() + "\n" + "Tiene una duracion de: " + miPelicula.getDuracionEnMinutos() + " minutos, y tiene una calificacion de " + miPelicula.calculaMedia() + "\n" + "de un total de " + miPelicula.getTotalEvaluaciones() + " evaluaciones" + "\n" + "Esta incluida en el plan? - " + miPelicula.getIsIncluidoEnElPlan());
    }
}
