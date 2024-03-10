-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL DEFAULT false,
    "body" TEXT NOT NULL DEFAULT '',
    "lang" TEXT NOT NULL DEFAULT 'json',
    "ruleId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Mock_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rule" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Mock" ("body", "createdAt", "default", "id", "name", "ruleId", "updatedAt") SELECT "body", "createdAt", "default", "id", "name", "ruleId", "updatedAt" FROM "Mock";
DROP TABLE "Mock";
ALTER TABLE "new_Mock" RENAME TO "Mock";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
