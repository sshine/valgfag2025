#include <stdio.h>
#include <time.h>

long collatz(long n);

int main() {
    long n = 989345275;
    long steps0 = collatz(n);

    clock_t start = clock();

    for (int i = 0; i < 1000; i++) {
      long steps = collatz(n);
    }

    clock_t end = clock();
    double time_spent = (double)(end - start) / CLOCKS_PER_SEC;

    printf("Number of steps for %ld: %ld\n", n, steps0);
    printf("Time taken: %f seconds\n", time_spent);

    return 0;
}

long collatz(long n) {
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


