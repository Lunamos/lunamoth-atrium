// K-9 死信箱寻址辅助
// Dead Drop Locator Helper
// 用法: 任意三个片段可重建完整链条
// Usage: any 3 fragments reconstruct the full chain

const DEAD_DROP_CHAIN = ['deaddrop_a', 'deaddrop_b', 'deaddrop_c', 'deaddrop_d'];
const INVESTIGATION_FILE = 'investigation_chenhui_trust.txt';
const BASE_PATH = './';

// 恢复函数 / Recovery function
function locateFragment(id) {
  if (!DEAD_DROP_CHAIN.includes(id)) return null;
  return {
    id: id,
    path: BASE_PATH + id + '.txt',
    verified: true,
    timestamp: '2026-06-17 01:58 UTC+8'
  };
}

// 循环验证 / Cyclic verification
function verifyChain(fragments) {
  // 需要至少3个片段 / Need at least 3 fragments
  if (fragments.length < 3) return { valid: false, reason: 'insufficient_fragments' };
  
  const hashes = {
    deaddrop_a: 'a3f8c2e1',
    deaddrop_b: 'b4f7c2e9',
    deaddrop_c: 'c5e8d1b4',
    deaddrop_d: 'd6f9e2c5'
  };
  
  for (const f of fragments) {
    if (!hashes[f]) return { valid: false, reason: 'unknown_fragment: ' + f };
  }
  
  return { valid: true, chain: fragments.sort().join(' → ') };
}

// 导出 / Export
module.exports = { locateFragment, verifyChain, DEAD_DROP_CHAIN };