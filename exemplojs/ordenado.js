// Troca valores de posição
const swap = (vetor, i, j) => {
    let temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
}

// Embaralhar vetor
const shuffle = (vetor, trocas = 5) => {
    for(let i = 0; i < trocas; i++) {

        let a = Math.floor(Math.random() * vetor.length);
        let b = Math.floor(Math.random() * vetor.length);

        swap(vetor, a, b);
    }
}

// Bubble Sort
const bubble_sort = (vetor) => {

    for(let i = 0; i < vetor.length; i++) {

        for(let j = 0; j < vetor.length - 1; j++) {

            if(vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }

    return vetor;
}

// Selection Sort
const selection_sort = (vetor) => {

    for(let i = 0; i < vetor.length; i++) {

        let menor = i;

        for(let j = i + 1; j < vetor.length; j++) {

            if(vetor[j] < vetor[menor]) {
                menor = j;
            }
        }

        swap(vetor, i, menor);
    }

    return vetor;
}

// Particionamento Quick Sort
const particionamento = (vetor, inicio, fim, pivot) => {

    while(inicio <= fim) {

        while(vetor[inicio] < pivot) {
            inicio++;
        }

        while(vetor[fim] > pivot) {
            fim--;
        }

        if(inicio <= fim) {
            swap(vetor, inicio, fim);
            inicio++;
            fim--;
        }
    }

    return inicio;
}

// Quick Sort
const quick_sort = (vetor, inicio, fim) => {

    if(vetor.length > 1) {

        let pivot = vetor[Math.floor((inicio + fim) / 2)];

        let index = particionamento(vetor, inicio, fim, pivot);

        if(inicio < index - 1) {
            quick_sort(vetor, inicio, index - 1);
        }

        if(index < fim) {
            quick_sort(vetor, index, fim);
        }
    }

    return vetor;
}