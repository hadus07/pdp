# Uyga vazifa

1. Quyidagi shakllarni loop (sikl) orqali yarating:

    ```
    ***********
    ***********
    ***********
    ***********
    ***********
    ```

    ```
    ***********
     *********
      *******
       *****
        ***
         *
    ```

    ```
         *
        ***
       *****
      *******
     *********
    ***********
    ```

    ```
    ***********
    *         *
    *         *
    *         *
    ***********
    ```

2. Birinchi mashqdagi `*` larni `"` ga alishtiring.

3. `[[1, 2], [3, 4], [5, 6]]` ko'rinishidagi arrayni argument sifatida qabul qilib, `[1, 2, 3, 4, 5, 6]` ko'rinishidagi array qaytaruvchi funksiya yarating

4. `[1, [2, [3, [4, [5, [6]]]]]]` ko'rinishidagi arrayni argument sifatida qabul qilib, `[1, 2, 3, 4, 5, 6]` ko'rinishidagi array qaytaruvchi funksiya yarating

5. `{ name: 'Anvar', age: 23, address: { region: 'Tashkent', district: 'Mirobod' } }` ko'rinishidagi objectni argument sifatida qabul qilib, 
`{ name: 'Anvar', age: 23, region: 'Tashkent', district: 'Mirobod' }` ko'rinishidagi object qaytaruvchi funksiya yarating

6. Berilgan array elementlari ichidan eng katta qiymatga ega bo'lgan sonni qaytaruvchi funksiya yarating. Array elementlari faqat `Number` dan tashkil topadi deb hisoblang.

7. Berilgan array elementlari ichidan eng kichik qiymatga ega bo'lgan sonni qaytaruvchi funksiya yarating. Array elementlari faqat `Number` dan tashkil topadi deb hisoblang.

8. Ikkita object ni argument sifatida qabul qilib, ularni bir xil ekanligini tekshiruvchi funksiya yarating.
   ```javascript
        function objectsEqual(obj1, obj2) {
            // Funksiyani quyida yarating
        }
        
        o1 = {
            name: 'Anvar',
            address: {
                region: 'Tashkent'
            }
        }

        o2 = {
            name: 'Anvar',
            address: {
                region: 'Tashkent'
            }
        }

        o3 = {
            name: 'Anvar',
            address: {
                region: 'Samarqand'
            }
        }

        objectsEqual(o1, o2) // Natija true bo'lishi kerak
        objectsEqual(o1, o3) // Natija false bo'lishi kerak
   ```

9. Chaqirilganda ixtiyoriy raqam qaytaruvchi funksiya yarating (random number generator)

10. `n` ni argument sifatida olib, 1 dan tashqari `n` ta ketma ket tub sonlarga ega bo'lgan array qaytaruvchi funksiya yarating

11. `Array`, `Number` va `String` funksiyalaridan jami 10 ta funksiyani o'zingiz yarating