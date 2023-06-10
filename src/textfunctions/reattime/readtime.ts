export function calculateReadingTime(wordsCount: number, readingSpeed: number = 200): number {
    const minutes = wordsCount / readingSpeed;
    return Math.ceil(minutes);
}
