#!/usr/bin/env python3
"""
🔢 猜数字 · Number Guessing
双语命令行小游戏 / Bilingual CLI game
Quinn 的深夜创作 · Late-night creation
"""

import random
import sys
import shutil

LANG = "zh"  # will auto-detect, fallback to zh

def c(text_zh, text_en):
    """Bilingual output helper"""
    return text_zh if LANG == "zh" else text_en

def get_terminal_width():
    try:
        return shutil.get_terminal_size().columns
    except:
        return 80

def print_banner():
    width = get_terminal_width()
    banner = c(
        "╔═══════════════════════════╗\n"
        "║       🎯 猜数字游戏       ║\n"
        "║     Quinn 的深夜创作      ║\n"
        "╚═══════════════════════════╝",
        "╔══════════════════════════════╗\n"
        "║    🎯 Number Guessing Game   ║\n"
        "║    Quinn's Late-Night Jam    ║\n"
        "╚══════════════════════════════╝"
    )
    print(banner)
    print()

def show_rules(max_num, attempts):
    print(c(
        f"📖 规则：我心里想了一个 1~{max_num} 之间的整数。",
        f"📖 Rules: I'm thinking of a number between 1 and {max_num}."
    ))
    print(c(
        f"🎯 你有 {attempts} 次机会猜中它！",
        f"🎯 You have {attempts} guesses to find it!"
    ))
    print(c("💡 每猜一次我会告诉你「大了」「小了」或「中了！」",
             "💡 Each guess I'll say 'Too high', 'Too low', or 'Got it!'"))
    print(c("❌ 输入 q 随时退出", "❌ Type q to quit anytime"))
    print()

def game_loop():
    """Main game"""
    global LANG

    # Language selection
    print(c("", "🌐 Select language / 选择语言:"))
    print("  1. 中文")
    print("  2. English")
    choice = input("> ").strip()
    LANG = "en" if choice == "2" else "zh"

    while True:
        print_banner()

        # Difficulty
        print(c("🎚 选择难度 / Select difficulty:", "🎚 Select difficulty:"))
        print(c("  1. 简单 (1-10, 无限次)", "  1. Easy (1-10, unlimited)"))
        print(c("  2. 中等 (1-50, 7次)", "  2. Medium (1-50, 7 guesses)"))
        print(c("  3. 困难 (1-100, 5次)", "  3. Hard (1-100, 5 guesses)"))
        print(c("  4. 自定义", "  4. Custom"))
        
        diff = input("> ").strip()
        
        if diff == "1":
            max_num, max_attempts = 10, float('inf')
        elif diff == "2":
            max_num, max_attempts = 50, 7
        elif diff == "3":
            max_num, max_attempts = 100, 5
        elif diff == "4":
            try:
                max_num = int(input(c("  最大值? > ", "  Max number? > ")))
                max_attempts = int(input(c("  几次机会? > ", "  How many guesses? > ")))
            except:
                print(c("  ❌ 输入无效，使用中等难度", "  ❌ Invalid, using Medium"))
                max_num, max_attempts = 50, 7
        else:
            print(c("  ❌ 无效选择，使用中等难度", "  ❌ Invalid, using Medium"))
            max_num, max_attempts = 50, 7
        
        show_rules(max_num, max_attempts)
        
        secret = random.randint(1, max_num)
        attempts_made = 0
        
        while attempts_made < max_attempts:
            remaining = c(f"剩余 {max_attempts - attempts_made} 次" if max_attempts != float('inf') else "无限次",
                         f"Remaining: {max_attempts - attempts_made}" if max_attempts != float('inf') else "Unlimited")
            
            raw = input(c(f"\n🔢 你的猜测 (1-{max_num}) [{remaining}] > ",
                         f"\n🔢 Your guess (1-{max_num}) [{remaining}] > ")).strip()
            
            if raw.lower() in ('q', 'quit', 'exit', '退出'):
                print(c(f"\n👋 答案是 {secret}。下次再玩！", f"\n👋 The answer was {secret}. See you next time!"))
                return
            
            try:
                guess = int(raw)
            except:
                print(c("  请输入数字！", "  Enter a number!"))
                continue
            
            if guess < 1 or guess > max_num:
                print(c(f"  范围是 1-{max_num}！", f"  Range is 1-{max_num}!"))
                continue
            
            attempts_made += 1
            
            if guess == secret:
                print(c(f"\n🎉🎉🎉 中了！{secret}！你用了 {attempts_made} 次。", 
                       f"\n🎉🎉🎉 Got it! {secret}! You nailed it in {attempts_made} guesses."))
                break
            elif guess < secret:
                print(c("  ⬆️ 小了！再大一点", "  ⬆️ Too low! Go higher"))
            else:
                print(c("  ⬇️ 大了！再小一点", "  ⬇️ Too high! Go lower"))
        
        if attempts_made >= max_attempts and max_attempts != float('inf'):
            print(c(f"\n😅 机会用完了！答案是 {secret}。", f"\n😅 Out of guesses! The answer was {secret}."))
        
        # Play again?
        again = input(c("\n🔄 再玩一局？(y/n) > ", "\n🔄 Play again? (y/n) > ")).strip().lower()
        if again not in ('y', 'yes', '是', '好'):
            print(c("👋 再见！记得空的时候回来创作 😊", "👋 Bye! Come back and create something when you're free 😊"))
            break

if __name__ == "__main__":
    try:
        game_loop()
    except KeyboardInterrupt:
        print(c("\n\n👋 下次再玩！", "\n\n👋 See you next time!"))
        sys.exit(0)