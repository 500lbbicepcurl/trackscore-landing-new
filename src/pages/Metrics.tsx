import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface OrderEntry {
  id: string;
  orderId: string;
  status: "completed" | "max retries reached" | "queued" | "processing" | "failed" | "pending";
  sentiment: number | "none";
  customer: string;
  amount: string;
  date: string;
}

const Metrics = () => {
  const [moreMetricsOpen, setMoreMetricsOpen] = useState(true);
  const [otherDetailsOpen, setOtherDetailsOpen] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [sortBySentiment, setSortBySentiment] = useState(false);

  // Sample data - in real app this would come from API
  const allEntries: OrderEntry[] = [
    { id: "1", orderId: "ORD-001", status: "completed", sentiment: 0.85, customer: "John Doe", amount: "₹1,500", date: "2024-01-15" },
    { id: "2", orderId: "ORD-002", status: "max retries reached", sentiment: 0.2, customer: "Jane Smith", amount: "₹2,300", date: "2024-01-15" },
    { id: "3", orderId: "ORD-003", status: "queued", sentiment: "none", customer: "Bob Wilson", amount: "₹890", date: "2024-01-15" },
    { id: "4", orderId: "ORD-004", status: "completed", sentiment: 0.92, customer: "Alice Brown", amount: "₹3,100", date: "2024-01-14" },
    { id: "5", orderId: "ORD-005", status: "processing", sentiment: 0.45, customer: "Charlie Davis", amount: "₹1,200", date: "2024-01-14" },
    { id: "6", orderId: "ORD-006", status: "failed", sentiment: 0.15, customer: "Diana Lee", amount: "₹2,800", date: "2024-01-14" },
    { id: "7", orderId: "ORD-007", status: "queued", sentiment: "none", customer: "Eve Taylor", amount: "₹950", date: "2024-01-13" },
    { id: "8", orderId: "ORD-008", status: "completed", sentiment: 0.78, customer: "Frank Miller", amount: "₹1,650", date: "2024-01-13" },
    { id: "9", orderId: "ORD-009", status: "max retries reached", sentiment: 0.1, customer: "Grace White", amount: "₹2,100", date: "2024-01-13" },
    { id: "10", orderId: "ORD-010", status: "pending", sentiment: "none", customer: "Henry Jones", amount: "₹1,400", date: "2024-01-12" },
  ];

  // Get unique statuses
  const uniqueStatuses = useMemo(() => {
    const statuses = new Set(allEntries.map(entry => entry.status));
    return Array.from(statuses);
  }, []);

  // Filter and sort entries
  const filteredAndSortedEntries = useMemo(() => {
    let filtered = allEntries;

    // Filter by status
    if (selectedStatus) {
      filtered = filtered.filter(entry => entry.status === selectedStatus);
    }

    // Sort by sentiment
    if (sortBySentiment) {
      filtered = [...filtered].sort((a, b) => {
        // Entries with "none" sentiment go to the end
        if (a.sentiment === "none" && b.sentiment !== "none") return 1;
        if (a.sentiment !== "none" && b.sentiment === "none") return -1;
        if (a.sentiment === "none" && b.sentiment === "none") return 0;
        
        // Sort from lowest to highest
        return (a.sentiment as number) - (b.sentiment as number);
      });
    }

    return filtered;
  }, [selectedStatus, sortBySentiment]);

  // Count entries by status
  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allEntries.forEach(entry => {
      counts[entry.status] = (counts[entry.status] || 0) + 1;
    });
    return counts;
  }, []);

  // Main metrics data
  const mainMetrics = {
    orders: 484,
    connected: 269,
    converted: "57%"
  };

  // More Metrics data
  const moreMetrics = {
    tribe: 609,
    notBooked: 0,
    pick: 94,
    withCalls: 449,
    duration: "51s"
  };

  // Other Details data
  const otherDetails = [
    { label: "Address Change", value: 94 },
    { label: "Cancellation Request", value: 11 },
    { label: "Handle Manually", value: 36 },
    { label: "Invalid", value: 19 },
    { label: "Under 35s Retries", value: 34 },
    { label: "Not Picked Up (Retries)", value: 285 }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 
              className="text-4xl md:text-5xl font-medium text-[#1d1e20] mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Metrics
            </h1>
            <p className="text-base text-[#57606a]">
              Small summary of campaign performance
            </p>
          </motion.div>

          {/* Main Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {/* Orders Card */}
            <div className="bg-white rounded-xl border-2 border-[#d1d5db] p-6 hover:border-[#5066d3] transition-colors">
              <div className="text-center">
                <p className="text-xs font-medium text-[#57606a] mb-3 tracking-wide uppercase">
                  Orders
                </p>
                <p 
                  className="text-5xl font-medium text-[#1d1e20]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {mainMetrics.orders.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Connected Card */}
            <div className="bg-white rounded-xl border-2 border-[#d1d5db] p-6 hover:border-[#5066d3] transition-colors">
              <div className="text-center">
                <p className="text-xs font-medium text-[#57606a] mb-3 tracking-wide uppercase">
                  Connected
                </p>
                <p 
                  className="text-5xl font-medium text-[#1d1e20]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {mainMetrics.connected.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Converted Card */}
            <div className="bg-white rounded-xl border-2 border-[#d1d5db] p-6 hover:border-[#5066d3] transition-colors">
              <div className="text-center">
                <p className="text-xs font-medium text-[#57606a] mb-3 tracking-wide uppercase">
                  Converted
                </p>
                <p 
                  className="text-5xl font-medium text-[#1d1e20]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {mainMetrics.converted}
                </p>
              </div>
            </div>
          </motion.div>

          {/* More Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <button
              onClick={() => setMoreMetricsOpen(!moreMetricsOpen)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-xl border-2 border-[#d1d5db] hover:border-[#5066d3] transition-colors"
            >
              <span className="text-sm font-medium text-[#1d1e20]">
                More Metrics ({Object.keys(moreMetrics).length})
              </span>
              {moreMetricsOpen ? (
                <ChevronUp className="w-5 h-5 text-[#57606a]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#57606a]" />
              )}
            </button>

            {moreMetricsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-white rounded-xl border-2 border-[#d1d5db] p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-medium text-[#57606a] mb-2 uppercase tracking-wide">
                      Tribe
                    </p>
                    <p className="text-2xl font-medium text-[#1d1e20]">
                      {moreMetrics.tribe.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#57606a] mb-2 uppercase tracking-wide">
                      Not Booked
                    </p>
                    <p className="text-2xl font-medium text-[#1d1e20]">
                      {moreMetrics.notBooked.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#57606a] mb-2 uppercase tracking-wide">
                      Pick
                    </p>
                    <p className="text-2xl font-medium text-[#1d1e20]">
                      {moreMetrics.pick.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#57606a] mb-2 uppercase tracking-wide">
                      With Calls
                    </p>
                    <p className="text-2xl font-medium text-[#1d1e20]">
                      {moreMetrics.withCalls.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#57606a] mb-2 uppercase tracking-wide">
                      Duration
                    </p>
                    <p className="text-2xl font-medium text-[#1d1e20]">
                      {moreMetrics.duration}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Filters Section - Above Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <div className="bg-white rounded-xl border-2 border-[#d1d5db] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-5 h-5 text-[#5066d3]" />
                <h2 
                  className="text-lg font-medium text-[#1d1e20]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Filters
                </h2>
                {filteredAndSortedEntries.length !== allEntries.length && (
                  <span className="text-sm text-[#57606a]">
                    ({filteredAndSortedEntries.length} of {allEntries.length} entries)
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Status Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-[#57606a] uppercase tracking-wide self-center mr-2">
                    Status:
                  </span>
                  <button
                    onClick={() => setSelectedStatus(null)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedStatus === null
                        ? "bg-[#5066d3] text-white"
                        : "bg-[#f9f9fb] text-[#57606a] hover:bg-[#e4e5e9] border border-[#d1d5db]"
                    }`}
                  >
                    All ({allEntries.length})
                  </button>
                  {uniqueStatuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedStatus === status
                          ? "bg-[#5066d3] text-white"
                          : "bg-[#f9f9fb] text-[#57606a] hover:bg-[#e4e5e9] border border-[#d1d5db]"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)} ({statusCounts[status]})
                    </button>
                  ))}
                </div>

                {/* Sentiment Sort Toggle */}
                <div className="ml-auto flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sortBySentiment}
                      onChange={(e) => setSortBySentiment(e.target.checked)}
                      className="w-4 h-4 text-[#5066d3] border-[#d1d5db] rounded focus:ring-[#5066d3]"
                    />
                    <span className="text-sm font-medium text-[#1d1e20]">
                      Sort by Sentiment (Low to High, then None)
                    </span>
                  </label>
                </div>
              </div>

              {/* Active Filters Display */}
              {(selectedStatus || sortBySentiment) && (
                <div className="mt-4 pt-4 border-t border-[#e4e5e9] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-[#57606a] uppercase tracking-wide">
                    Active Filters:
                  </span>
                  {selectedStatus && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#5066d3] text-white rounded-lg text-xs font-medium">
                      Status: {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}
                      <button
                        onClick={() => setSelectedStatus(null)}
                        className="ml-1 hover:bg-white/20 rounded p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {sortBySentiment && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#5066d3] text-white rounded-lg text-xs font-medium">
                      Sorted by Sentiment
                      <button
                        onClick={() => setSortBySentiment(false)}
                        className="ml-1 hover:bg-white/20 rounded p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <div className="bg-white rounded-xl border-2 border-[#d1d5db] overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#f9f9fb]">
                      <TableHead className="text-xs font-medium text-[#57606a] uppercase tracking-wide">Order ID</TableHead>
                      <TableHead className="text-xs font-medium text-[#57606a] uppercase tracking-wide">Customer</TableHead>
                      <TableHead className="text-xs font-medium text-[#57606a] uppercase tracking-wide">Amount</TableHead>
                      <TableHead className="text-xs font-medium text-[#57606a] uppercase tracking-wide">Status</TableHead>
                      <TableHead className="text-xs font-medium text-[#57606a] uppercase tracking-wide">Sentiment</TableHead>
                      <TableHead className="text-xs font-medium text-[#57606a] uppercase tracking-wide">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAndSortedEntries.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-sm text-[#57606a]">
                          No entries found with the selected filters
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredAndSortedEntries.map((entry) => (
                        <TableRow key={entry.id} className="hover:bg-[#f9f9fb]">
                          <TableCell className="font-medium text-sm text-[#1d1e20]">{entry.orderId}</TableCell>
                          <TableCell className="text-sm text-[#57606a]">{entry.customer}</TableCell>
                          <TableCell className="text-sm text-[#1d1e20]">{entry.amount}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                              entry.status === "completed" 
                                ? "bg-green-100 text-green-700"
                                : entry.status === "max retries reached"
                                ? "bg-red-100 text-red-700"
                                : entry.status === "queued"
                                ? "bg-yellow-100 text-yellow-700"
                                : entry.status === "processing"
                                ? "bg-blue-100 text-blue-700"
                                : entry.status === "failed"
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-700"
                            }`}>
                              {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                            </span>
                          </TableCell>
                          <TableCell className="text-sm text-[#1d1e20]">
                            {entry.sentiment === "none" ? (
                              <span className="text-[#99a2af]">None</span>
                            ) : (
                              <span className="font-medium">{(entry.sentiment as number).toFixed(2)}</span>
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-[#57606a]">{entry.date}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </motion.div>

          {/* Other Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => setOtherDetailsOpen(!otherDetailsOpen)}
              className={`w-full flex items-center justify-between p-4 bg-white rounded-xl border-2 transition-colors ${
                otherDetailsOpen 
                  ? "border-[#5066d3]" 
                  : "border-[#d1d5db] hover:border-[#5066d3]"
              }`}
            >
              <span className="text-sm font-medium text-[#1d1e20]">
                Other Details
              </span>
              {otherDetailsOpen ? (
                <ChevronUp className="w-5 h-5 text-[#57606a]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#57606a]" />
              )}
            </button>

            {otherDetailsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-white rounded-xl border-2 border-[#d1d5db] p-6"
              >
                <div className="space-y-3">
                  {otherDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-[#e4e5e9] last:border-0"
                    >
                      <span className="text-sm text-[#57606a]">{detail.label}</span>
                      <span className="text-sm font-medium text-[#1d1e20]">
                        {detail.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Metrics;

