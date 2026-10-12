'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  MessageSquare, 
  ExternalLink, 
  Shield, 
  Trophy, 
  ChevronUp, 
  ChevronDown, 
  Sparkles, 
  Send,
  X,
  Users
} from 'lucide-react';

// ==========================================
// 1. ДАННЫЕ И СОСТОЯНИЕ (ClipClash Feed & Clubs)
// ==========================================
const INITIAL_FEED = [
  {
    id: 'v1',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-code-animation-on-a-tech-display-42865-large.mp4',
    author: 'kuanysh',
    club: { name: 'Q-Empire', tag: 'Q-EMP', rank: '#1', points: 15400 },
    caption: 'Запустили тест очистки воздуха Q-Air! Смотрите на результат в смоге 🚀',
    projectUrl: 'https://github.com',
    likes: 2450,
    comments: [
      { id: 1, user: 'alex_dev', text: 'Жесткий контент! В какой программе собирали 3D модель?' },
      { id: 2, user: 'q_fan', text: 'Клуб Q-Empire вперед! 🔥 Поднимаем рейтинг!' }
    ]
  },
  {
    id: 'v2',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-41528-large.mp4',
    author: 'meme_lord',
    club: { name: 'Meme Lords', tag: 'ROFL', rank: '#2', points: 11200 },
    caption: 'Когда задеплоил баг на прод в 3 часа ночи и надеешься, что никто не заметит 💀',
    projectUrl: null,
    likes: 4890,
    comments: [
      { id: 1, user: 'senior_coder', text: 'Жиза ппц, каждый день так))))' }
    ]
  }
];

const
