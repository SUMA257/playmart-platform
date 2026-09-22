import { Download } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';

export async function saveAndVerifyDownload(
  download: Download,
  targetDir: string,
  minBytes: number = 10
): Promise<string> {
  const fileName = download.suggestedFilename();
  const filePath = path.join(targetDir, fileName);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  await download.saveAs(filePath);
  const stats = fs.statSync(filePath);

  if (stats.size < minBytes) {
    throw new Error(`Downloaded file ${fileName} is too small (${stats.size} bytes). Minimum expected: ${minBytes}`);
  }

  return filePath;
}