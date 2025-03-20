public class Collatz {
    public static void main(String[] args) {
        long n = 989_345_275;
        long steps0 = collatz(n);

        long startTime = System.nanoTime();

        for (int i = 0; i < 1000; i++) {
            long steps = collatz(n);
        }

        long endTime = System.nanoTime();
        double timeSpent = (endTime - startTime) / 1_000_000_000.0;

        System.out.println("Number of steps for " + n + ": " + steps0);
        System.out.println("Time taken: " + String.format("%f", timeSpent) + " seconds");
    }

    public static long collatz(long n) {
        long steps = 0;

        while (n != 1) {
            if (n % 2 == 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
            steps++;
        }

        return steps;
    }
}
