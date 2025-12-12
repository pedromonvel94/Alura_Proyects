package com.aluracursos.screenmatch.modelos;

public class Pelicula {
    private String nombre;
    private int fechaDeLanzamiento;
    private int duracionEnMinutos;
    private boolean incluidoEnElPlan;
    private double sumaDeLasEvaluaciones;
    private int totalEvaluaciones;

    public void muestraFichaTecnica(){
        System.out.println("Mi pelicula es: " + nombre);
        System.out.println("Su fecha de lanzamiento es: " + fechaDeLanzamiento);
        System.out.println("La pelicula esta en el plan: " + (incluidoEnElPlan ? "True" : "False"));
        System.out.println("La duracion de la pelicula es: "+ duracionEnMinutos);
    }

    public void evalua(double nota){
        sumaDeLasEvaluaciones += nota;
        totalEvaluaciones++;
    }

    public double calculaMedia(){
        return sumaDeLasEvaluaciones/totalEvaluaciones;
    }

    public String getNombre() {
        return nombre;
    }

    public int getFechaDeLanzamiento() {
        return fechaDeLanzamiento;
    }

    public int getDuracionEnMinutos() {
        return duracionEnMinutos;
    }

    public boolean getIsIncluidoEnElPlan() {
        return incluidoEnElPlan;
    }

    public double getSumaDeLasEvaluaciones() {
        return sumaDeLasEvaluaciones;
    }

    public int getTotalEvaluaciones() {
        return totalEvaluaciones;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setFechaDeLanzamiento(int fechaDeLanzamiento) {
        this.fechaDeLanzamiento = fechaDeLanzamiento;
    }

    public void setDuracionEnMinutos(int duracionEnMinutos) {
        this.duracionEnMinutos = duracionEnMinutos;
    }

    public void setIsIncluidoEnElPlan(boolean incluidoEnElPlan) {
        this.incluidoEnElPlan = incluidoEnElPlan;
    }
}
