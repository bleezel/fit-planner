import type { CatalogExercise } from '@/entities/training/catalogTypes';

export const mockExerciseCatalog: CatalogExercise[] = [
  // Грудь
  { id: 'cat-1', name: 'Жим лёжа', muscleGroup: 'chest' },
  { id: 'cat-2', name: 'Жим гантелей на наклонной', muscleGroup: 'chest' },
  { id: 'cat-3', name: 'Жим в тренажёре нейтральным хватом', muscleGroup: 'chest' },
  { id: 'cat-4', name: 'Разведение гантелей лёжа', muscleGroup: 'chest' },
  { id: 'cat-5', name: 'Отжимания', muscleGroup: 'chest' },

  // Спина
  { id: 'cat-6', name: 'Тяга штанги в наклоне', muscleGroup: 'back' },
  { id: 'cat-7', name: 'Подтягивания', muscleGroup: 'back' },
  { id: 'cat-8', name: 'Вертикальная тяга в тренажёре', muscleGroup: 'back' },
  { id: 'cat-9', name: 'Горизонтальная тяга в тренажёре', muscleGroup: 'back' },
  { id: 'cat-10', name: 'Вертикальная тяга 1 рукой в кроссовере', muscleGroup: 'back' },
  { id: 'cat-11', name: 'Горизонтальная тяга 1 рукой с упором груди', muscleGroup: 'back' },

  // Ноги
  { id: 'cat-12', name: 'Приседания со штангой', muscleGroup: 'legs' },
  { id: 'cat-13', name: 'Жим ногами', muscleGroup: 'legs' },
  { id: 'cat-14', name: 'Жим ногами по одной', muscleGroup: 'legs' },
  { id: 'cat-15', name: 'Болгарские сплит-приседания', muscleGroup: 'legs' },
  { id: 'cat-16', name: 'Разгибание ног', muscleGroup: 'legs' },
  { id: 'cat-17', name: 'Сгибание ног', muscleGroup: 'legs' },
  { id: 'cat-18', name: 'Подъёмы на носки', muscleGroup: 'legs' },
  { id: 'cat-19', name: 'Жим одной ногой сидя', muscleGroup: 'legs' },

  // Ягодицы
  { id: 'cat-20', name: 'Хип траст в тренажёре', muscleGroup: 'glutes' },
  { id: 'cat-21', name: 'Ягодичный мостик с резинкой', muscleGroup: 'glutes' },
  { id: 'cat-22', name: 'Румынская тяга', muscleGroup: 'glutes' },
  { id: 'cat-23', name: 'Тяга сумо', muscleGroup: 'glutes' },
  { id: 'cat-24', name: 'Cable Pull-Through', muscleGroup: 'glutes' },
  { id: 'cat-25', name: 'Махи ногой назад в тренажёре', muscleGroup: 'glutes' },
  { id: 'cat-26', name: 'Отведение ноги в кроссовере', muscleGroup: 'glutes' },
  { id: 'cat-27', name: 'Абдуктор сидя', muscleGroup: 'glutes' },

  // Плечи
  { id: 'cat-28', name: 'Жим стоя', muscleGroup: 'shoulders' },
  { id: 'cat-29', name: 'Махи гантелями в стороны', muscleGroup: 'shoulders' },
  { id: 'cat-30', name: 'Махи в сторону в наклоне', muscleGroup: 'shoulders' },
  { id: 'cat-31', name: 'Махи на среднюю дельту в тренажёре', muscleGroup: 'shoulders' },
  { id: 'cat-32', name: 'Reverse Pec Deck', muscleGroup: 'shoulders' },
  { id: 'cat-33', name: 'Face Pull', muscleGroup: 'shoulders' },

  // Руки
  { id: 'cat-34', name: 'Сгибания на бицепс', muscleGroup: 'arms' },
  { id: 'cat-35', name: 'Бицепс Скотта', muscleGroup: 'arms' },
  { id: 'cat-36', name: 'Сгибания на бицепс в кроссовере', muscleGroup: 'arms' },
  { id: 'cat-37', name: 'Бицепс гантелями с супинацией', muscleGroup: 'arms' },
  { id: 'cat-38', name: 'Отжимания на брусьях', muscleGroup: 'arms' },
  { id: 'cat-39', name: 'Трицепс на блоке', muscleGroup: 'arms' },
  { id: 'cat-40', name: 'Трицепс косичка вверх', muscleGroup: 'arms' },

  // Пресс
  { id: 'cat-41', name: 'Планка', muscleGroup: 'core' },
  { id: 'cat-42', name: 'Dead Bug', muscleGroup: 'core' },
  { id: 'cat-43', name: 'Pallof Press', muscleGroup: 'core' },
  { id: 'cat-44', name: 'Bird Dog', muscleGroup: 'core' },
  { id: 'cat-45', name: 'Bear Plank', muscleGroup: 'core' },
  { id: 'cat-46', name: 'McGill Curl-up', muscleGroup: 'core' },
  { id: 'cat-47', name: 'Side Plank', muscleGroup: 'core' },
];
