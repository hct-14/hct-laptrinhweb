#include <stdio.h>
#include <string.h>

void in_ra_xau_giong_nhau(char* xau1, char* xau2) {
    int i, j, dem = 0;
    int len1 = strlen(xau1);
    int len2 = strlen(xau2);
    
    // In ra hai xâu ban ð?u
    printf("Xau 1: %s\n", xau1);
    printf("Xau 2: %s\n", xau2);
    
    // T?m s? kí t? gi?ng nhau và chuy?n thành d?u *
    for (i = 0; i < len1; i++) {
        for (j = 0; j < len2; j++) {
            if (xau1[i] == xau2[j]) {
                xau1[i] = '*';
                xau2[j] = '*';
                dem++;
                break;
            }
        }
    }
    
    // In ra s? kí t? gi?ng nhau
    printf("So ki tu giong nhau: %d\n", dem);
    
    // In ra hai xâu sau khi chuy?n kí t? thành *
    printf("Xau 1 sau khi chuyen ki tu: %s\n", xau1);
    printf("Xau 2 sau khi chuyen ki tu: %s\n", xau2);
}

int main() {
    char xau1[100], xau2[100];
    
    printf("Nhap xau 1: ");
    fgets(xau1, sizeof(xau1), stdin);
    xau1[strcspn(xau1, "\n")] = '\0';  // Xóa kí t? xu?ng d?ng
    
    printf("Nhap xau 2: ");
    fgets(xau2, sizeof(xau2), stdin);
    xau2[strcspn(xau2, "\n")] = '\0';  // Xóa kí t? xu?ng d?ng
    
    in_ra_xau_giong_nhau(xau1, xau2);
    
    return 0;
}

