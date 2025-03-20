#include <stdio.h>
#include <string.h>

#define MAX_LINE_LENGTH 1024

int main(int argc, char *argv[]) {
    FILE *file;
    char line[MAX_LINE_LENGTH];

    if (argc != 2) {
        printf("Usage: %s <filename>\n", argv[0]);
        return 1;
    }

    file = fopen(argv[1], "r");
    if (file == NULL) {
        printf("Error opening file: %s\n", argv[0]);
        return 1;
    }

    while (fgets(line, MAX_LINE_LENGTH, file) != NULL) {
        // Print the current line
        printf("%s", line);

        // If we've reached EOF, exit the loop
        if (feof(file)) {
            break;
        }

        // Check if line is empty (just a newline)
        if (strcmp(line, "\n") == 0) {
            continue;
        }

        // Wait for Enter key
        getchar();
    }

    fclose(file);
    return 0;
}
