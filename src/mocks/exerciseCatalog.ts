import type { CatalogExercise } from '@/entities/training/catalogTypes';

export const mockExerciseCatalog: CatalogExercise[] = [
  // Грудь
  { id: 'cat-1', name: 'Жим лёжа', muscleGroup: 'chest', equipment: 'barbell' },
  { id: 'cat-2', name: 'Жим гантелей на наклонной', muscleGroup: 'chest', equipment: 'dumbbell' },
  { id: 'cat-3', name: 'Жим в тренажёре нейтральным хватом', muscleGroup: 'chest', equipment: 'machine' },
  { id: 'cat-4', name: 'Разведение гантелей лёжа', muscleGroup: 'chest', equipment: 'dumbbell' },
  { id: 'cat-5', name: 'Отжимания', muscleGroup: 'chest', equipment: 'bodyweight' },

  // Спина
  { id: 'cat-6', name: 'Тяга штанги в наклоне', muscleGroup: 'back', equipment: 'barbell' },
  { id: 'cat-7', name: 'Подтягивания', muscleGroup: 'back', equipment: 'bodyweight' },
  { id: 'cat-8', name: 'Вертикальная тяга в тренажёре', muscleGroup: 'back', equipment: 'machine' },
  { id: 'cat-9', name: 'Горизонтальная тяга в тренажёре', muscleGroup: 'back', equipment: 'machine' },
  { id: 'cat-10', name: 'Вертикальная тяга 1 рукой в кроссовере', muscleGroup: 'back', equipment: 'cable' },
  { id: 'cat-11', name: 'Горизонтальная тяга 1 рукой с упором груди', muscleGroup: 'back', equipment: 'machine' },

  // Ноги
  { id: 'cat-12', name: 'Приседания со штангой', muscleGroup: 'legs', equipment: 'barbell' },
  { id: 'cat-13', name: 'Жим ногами', muscleGroup: 'legs', equipment: 'machine' },
  { id: 'cat-14', name: 'Жим ногами по одной', muscleGroup: 'legs', equipment: 'machine' },
  { id: 'cat-15', name: 'Болгарские сплит-приседания', muscleGroup: 'legs', equipment: 'dumbbell' },
  { id: 'cat-16', name: 'Разгибание ног', muscleGroup: 'legs', equipment: 'machine' },
  { id: 'cat-17', name: 'Сгибание ног', muscleGroup: 'legs', equipment: 'machine' },
  { id: 'cat-18', name: 'Подъёмы на носки', muscleGroup: 'legs', equipment: 'machine' },
  { id: 'cat-19', name: 'Жим одной ногой сидя', muscleGroup: 'legs', equipment: 'machine' },

  // Ягодицы
  { id: 'cat-20', name: 'Хип траст в тренажёре', muscleGroup: 'glutes', equipment: 'machine' },
  { id: 'cat-21', name: 'Ягодичный мостик с резинкой', muscleGroup: 'glutes', equipment: 'band' },
  { id: 'cat-22', name: 'Румынская тяга', muscleGroup: 'glutes', equipment: 'barbell' },
  { id: 'cat-23', name: 'Тяга сумо', muscleGroup: 'glutes', equipment: 'barbell' },
  { id: 'cat-24', name: 'Cable Pull-Through', muscleGroup: 'glutes', equipment: 'cable' },
  { id: 'cat-25', name: 'Махи ногой назад в тренажёре', muscleGroup: 'glutes', equipment: 'machine' },
  { id: 'cat-26', name: 'Отведение ноги в кроссовере', muscleGroup: 'glutes', equipment: 'cable' },
  { id: 'cat-27', name: 'Абдуктор сидя', muscleGroup: 'glutes', equipment: 'machine' },

  // Плечи
  { id: 'cat-28', name: 'Жим стоя', muscleGroup: 'shoulders', equipment: 'barbell' },
  { id: 'cat-29', name: 'Махи гантелями в стороны', muscleGroup: 'shoulders', equipment: 'dumbbell' },
  { id: 'cat-30', name: 'Махи в сторону в наклоне', muscleGroup: 'shoulders', equipment: 'dumbbell' },
  { id: 'cat-31', name: 'Махи на среднюю дельту в тренажёре', muscleGroup: 'shoulders', equipment: 'machine' },
  { id: 'cat-32', name: 'Reverse Pec Deck', muscleGroup: 'shoulders', equipment: 'machine' },
  { id: 'cat-33', name: 'Face Pull', muscleGroup: 'shoulders', equipment: 'cable' },

  // Руки
  { id: 'cat-34', name: 'Сгибания на бицепс', muscleGroup: 'arms', equipment: 'dumbbell' },
  { id: 'cat-35', name: 'Бицепс Скотта', muscleGroup: 'arms', equipment: 'machine' },
  { id: 'cat-36', name: 'Сгибания на бицепс в кроссовере', muscleGroup: 'arms', equipment: 'cable' },
  { id: 'cat-37', name: 'Бицепс гантелями с супинацией', muscleGroup: 'arms', equipment: 'dumbbell' },
  { id: 'cat-38', name: 'Отжимания на брусьях', muscleGroup: 'arms', equipment: 'bodyweight' },
  { id: 'cat-39', name: 'Трицепс на блоке', muscleGroup: 'arms', equipment: 'cable' },
  { id: 'cat-40', name: 'Трицепс косичка вверх', muscleGroup: 'arms', equipment: 'dumbbell' },

  // Пресс
  { id: 'cat-41', name: 'Планка', muscleGroup: 'core', equipment: 'bodyweight' },
  { id: 'cat-42', name: 'Dead Bug', muscleGroup: 'core', equipment: 'bodyweight' },
  { id: 'cat-43', name: 'Pallof Press', muscleGroup: 'core', equipment: 'cable' },
  { id: 'cat-44', name: 'Bird Dog', muscleGroup: 'core', equipment: 'bodyweight' },
  { id: 'cat-45', name: 'Bear Plank', muscleGroup: 'core', equipment: 'bodyweight' },
  { id: 'cat-46', name: 'McGill Curl-up', muscleGroup: 'core', equipment: 'bodyweight' },
  { id: 'cat-47', name: 'Side Plank', muscleGroup: 'core', equipment: 'bodyweight' },
];
